export const consoleLog = async () => {
  const res = await fetch(`https://dog.ceo/api/breed/hound/images/random`)
  console.log('import:',await res.json())
}