// FROZEN contract (owner: orchestrator): what counts as progress in Pop-up Atlas.
// SCRAPS: small paper collectables lying on the page, one kind per biome plus a rare night-only one.
export const SCRAPS = {
  leaf: { biome: 'heartland', name: '눌린 나뭇잎' },
  shell: { biome: 'desert', name: '화석 조개' },
  snowflake: { biome: 'snow', name: '종이 눈송이' },
  petal: { biome: 'blossom', name: '눌린 꽃잎' },
  feather: { biome: 'pinewood', name: '올빼미 깃털' },
  star: { biome: null, name: '종이 별', night: true },
};
export const SCRAP_IDS = Object.keys(SCRAPS);
