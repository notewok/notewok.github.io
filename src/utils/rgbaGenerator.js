const generateRGBA = (figmaColor) => {
  const valueMultiplier = (value) => {
    return Math.round(value*255);
  }
  const valueBuilder = (values) => {
    return `rgba(${valueMultiplier(values.r)}, ${valueMultiplier(values.g)}, ${valueMultiplier(values.b)}, ${values.a})`
  }
  let values = {}
  Object.values(figmaColor).map( color => {
    return values = { ...values, [color.name]: valueBuilder(color.fills[0].color) }
  })
  return values
}

export {generateRGBA};