import { Page } from '@playwright/test';

export class PlaylistPage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto(process.env.BASE_URL || 'https://vite-react-alpha-lemon.vercel.app/');
  }

  async searchTrack(trackName: string) {
    await this.page.locator('.MuiInputBase-input').fill(trackName);
  }

  async addFirstTrack() {
    await this.page.getByRole('button', { name: '+' }).first().click();
  }

  async getPlaylistTracks() {
    return this.page.locator('#playlist').allTextContents();
  }

  async getTotalDuration() {
    return this.page.locator('#playlist-duration').textContent();
  }
}
