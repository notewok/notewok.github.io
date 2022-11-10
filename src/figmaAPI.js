const figmaKey = "lrnXeV1H80G6Jsi7eVKtmd";

export const getFigmaObject = () => {
  return fetch(`https://api.figma.com/v1/files/${figmaKey}/styles`, {
    method: "GET",
    headers: {
      "X-Figma-Token": "figd_sbwKKnl8VuoRJGbBLcyNmm6tbfAM4N-U7ZsjJyNI"
    }
  }).then( resp => resp.json() )
}

export const getColorById = (colorId) => {
  return fetch(`https://api.figma.com/v1/files/${figmaKey}/nodes?ids=${colorId}`, {
    method: "GET",
    headers: {
      "X-Figma-Token": "figd_sbwKKnl8VuoRJGbBLcyNmm6tbfAM4N-U7ZsjJyNI"
    }
  }).then( resp => resp.json() )
}