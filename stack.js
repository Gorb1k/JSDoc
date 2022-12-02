const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }, { value: 4 }],
    },
    {
      value: 5,
      children: [{ value: 6 }, { value: 7 }],
    },
  ],
}

const findValues = tree => {
  const stack = [tree]
  const result = []

  while (stack.length > 0) {
    const node = stack.pop()

    if (node.value !== undefined) {
      result.push(node.value)
    }
    if (node.children?.length > 0) {
      const children = [...node.children]

      while (children.length > 0) {
        const child = children.pop()
        stack.push(child)
      }
    }
  }

  return result
}

console.log(findValues(tree))
