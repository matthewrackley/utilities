function parseUnicode(input: string) {
  let unicodeValue = ''
  for (let char of input) {
    const zeroChar = char.codePointAt(0)
    if (zeroChar) {
      const codePoint = zeroChar.toString(16).padStart(4, '0')
      unicodeValue += `\\u${codePoint}`
    }
  }
  return unicodeValue
}
interface Codicon {
  value: `codicon${string}`
}
async function getParsedData(text: string) {
  const regex = /(codicon-[\w-]+)\s?.+?\{.+?:(.+?)\}/
  const output = []
  let matches
  while ((matches = regex.exec(text)) !== null) {
    try {
      output.push([matches[1], parseUnicode(matches[2])])
    } catch (err) {
      throw new Error(`Error during handling `)
    }
  }
  return output
}
interface Output {
  text: string;
  data: {
    value: string;
    unicode: string;
  }[];
}
async function fetchUnicodeData(document: Document) {
  let output: Output = {
    text: '',
    data: []
  }

  try {
    // Fetch data from the server
    const response = await fetch('https://code.visualstudio.com/dist/v2/style.css') // Replace with your URL
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    output.text = await response.text()

    // Convert each character to its Unicode escape sequence
    let unicodeValues = ''
    for (let char of output.text) {
      const codeP = char.codePointAt(0)
      if (codeP) {
        const codePoint = codeP.toString(16).padStart(4, '0')
        unicodeValues += `\\u${codePoint}|`
      }
    }
    const unicodeArray = unicodeValues.split('|')

    // Display the Unicode escape sequences
    output.textContent += `Unicode Values: ${unicodeValues.trim()}\n`
  } catch (error) {
    output.textContent = `Error: ${error.message}`
  }
}
