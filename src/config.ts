const { TERRA_LCD, TERRA_MANTLE, TERRA_CHAIN_ID } = process.env

export function validateConfig(): void {
  const keys = ['TERRA_LCD', 'TERRA_MANTLE', 'TERRA_CHAIN_ID']
  for (const key of keys) {
    if (!process.env[key]) {
      throw new Error(`process.env.${key} is missing`)
    }
  }
}

const config = {
  TERRA_LCD,
  TERRA_MANTLE,
  TERRA_CHAIN_ID,
  START_BLOCK_HEIGHT: +(process.env.START_BLOCK_HEIGHT || 0),
}

export default config
