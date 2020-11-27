
export const TOKENS = {
  // Number
  default: {
    regex: /\d+(?!\.)|\d*\.\d+/,
    new: (value) => ({
      priority: -1,
      compute: () => value
    })
  },

  '+': {
    regex: /\+/,
    new: () => ({
      compute: (l, r) => {
        return l + r
      }
    })
  },

  '-': {
    new: () => ({
      compute: (l, r) => {
        return l - r
      }
    })
  },

  '*': {
    regex: /\*/,
    new: () => ({
      priority: 1,
      compute: (l, r) => {
        return l * r
      }
    })
  },

  '/': {
    regex: /\//,
    new: () => ({
      priority: 1,
      compute: (l, r) => {
        return l / r
      }
    })
  }
}
