const units = [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64]

module.exports = (property, {
  noUnit,
  std,
  negative,
  percentage,
  vh,
  vw
}) => {
  if (noUnit) {
    for (const unit of units) {
      property[`${unit}`] = `${unit}`
    }
  }

  if (std) {
    for (const unit of units) {
      property[`${unit}`] = `${unit * 0.25}rem`
    }
  }

  if (negative) {
    for (const unit of units) {
      property[`-${unit}`] = `${-unit * 0.25}rem`
    }
  }

  if (percentage) {
    for (let i = 2; i <= 6; i++) {
      for (let j = 1; j < i; j++) {
        property[`${j}/${i}`] = `${(j / i) * 100}%`
      }
    }

    for (let j = 1; j < 12; j++) {
      property[`${j}/${12}`] = `${(j / 12) * 100}%`
    }
  }

  if (vh) {
    for (let i = 2; i <= 6; i++) {
      for (let j = 1; j < i; j++) {
        property[`vh-${j}/${i}`] = `${(j / i) * 100}vh`
      }
    }

    for (let j = 1; j < 12; j++) {
      property[`vh-${j}/${12}`] = `${(j / 12) * 100}vh`
    }
  }

  if (vw) {
    for (let i = 2; i <= 6; i++) {
      for (let j = 1; j < i; j++) {
        property[`vw-${j}/${i}`] = `${(j / i) * 100}vw`
      }
    }

    for (let j = 1; j < 12; j++) {
      property[`vw-${j}/${12}`] = `${(j / 12) * 100}vw`
    }
  }

  return property
}
