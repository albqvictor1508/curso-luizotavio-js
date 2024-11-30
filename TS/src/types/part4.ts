

function mapStringArray(stringArray: string[], mapped: CallableFunction) {
  return stringArray.map((item) => mapped(item))
}

const stringArray: string[] = ["vito", "lexsa", "se amam", "absurdamente"];
const mappedStringArray = mapStringArray(stringArray, (item: string) => item + " gay")


console.log(stringArray);
console.log(mappedStringArray);
