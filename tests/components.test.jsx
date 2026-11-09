// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../src/Sidebar";
import Reel from "../src/components/Reel";
import ImagePost from "../src/components/ImagePost";

afterEach(cleanup);

describe("Sidebar", () => {
  it("links the three real routes and exposes the search toggle state", () => {
    const toggle = vi.fn();
    render(
      <MemoryRouter initialEntries={["/explore"]}>
        <Sidebar isCollapsed={false} toggleSidebar={toggle} />
      </MemoryRouter>
    );
    const hrefs = screen.getAllByRole("link").map((a) => a.getAttribute("href"));
    expect(hrefs).toEqual(["/", "/explore", "/reels"]);
    expect(screen.getByRole("link", { name: "Explore" }).getAttribute("aria-current")).toBe("page");

    const search = screen.getByRole("button", { name: "Search" });
    expect(search.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(search);
    expect(toggle).toHaveBeenCalledTimes(1);
  });

  it("shows the search panel only while collapsed", () => {
    const { rerender } = render(
      <MemoryRouter>
        <Sidebar isCollapsed={false} toggleSidebar={() => {}} />
      </MemoryRouter>
    );
    expect(screen.queryByRole("searchbox")).toBeNull();
    rerender(
      <MemoryRouter>
        <Sidebar isCollapsed toggleSidebar={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByRole("searchbox")).toBeTruthy();
  });
});

describe("Reel", () => {
  beforeEach(() => {
    window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
    window.HTMLMediaElement.prototype.pause = vi.fn();
  });

  it("toggles playback from the keyboard and on click", () => {
    render(<Reel video="/Video1.mp4" username="demo" likes="1K" />);
    const video = screen.getByLabelText(/Reel by demo/);
    fireEvent.keyDown(video, { key: "Enter" });
    fireEvent.click(video);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2);
  });

  it("labels every action button", () => {
    render(<Reel video="/Video1.mp4" username="demo" likes="1K" />);
    for (const name of ["Like", "Comment", "Share", "Save", "More options"]) {
      expect(screen.getByRole("button", { name })).toBeTruthy();
    }
  });
});

describe("ImagePost", () => {
  it("pluralises the like count", () => {
    const { rerender } = render(<ImagePost profilePicture="/a.png" profileName="u" postImage="/a.png" likesCount={1} />);
    expect(screen.getByText("1 like")).toBeTruthy();
    rerender(<ImagePost profilePicture="/a.png" profileName="u" postImage="/a.png" likesCount={2} />);
    expect(screen.getByText("2 likes")).toBeTruthy();
  });
});
