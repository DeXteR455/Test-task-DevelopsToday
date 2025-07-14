import { test, expect } from '@playwright/test';
import { PlaylistPage } from '../src/pages/playlistPage';

test.describe('Testing Playlist App core-features', () => {
  let playlistPage: PlaylistPage;

  test.beforeEach(async ({ page }) => {
    playlistPage = new PlaylistPage(page);
    await playlistPage.goto();
  });

  test('Shows a track from search input', async () => {
    await playlistPage.searchTrack('Spring');
    const tracks = await playlistPage.page.locator('.MuiGrid-container').allTextContents();
    expect(tracks.length).toBeGreaterThan(0);
    expect(tracks.every((t) => t.toLowerCase().includes('spring'))).toBeTruthy();
  });

  test('Adding a track into playlist', async () => {
    await playlistPage.searchTrack('Spring');
    await playlistPage.addFirstTrack();
    const playlistTracks = await playlistPage.getPlaylistTracks();
    expect(playlistTracks.length).toBeGreaterThan(0);
    expect(playlistTracks[0].toLowerCase()).toContain('spring');
  });

  test('Matching playlist total duration', async () => {
    await playlistPage.searchTrack('Summer');
    await playlistPage.addFirstTrack();
    const durationText = await playlistPage.page
      .locator('.MuiGrid-grid-xs-2')
      .first()
      .textContent();
    const [mm, ss] = durationText!.split(':').map(Number);
    const expectedSeconds = mm * 60 + ss;
    const totalText = await playlistPage.getTotalDuration();
    expect(totalText).toContain(expectedSeconds.toString());
    console.log(totalText);
    console.log(expectedSeconds);
  });

  test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
  });
});
