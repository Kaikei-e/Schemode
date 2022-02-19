export default function incrementMode(modeNum: number) {
  console.log(modeNum);
  
  if (modeNum >= 2) {
    modeNum = 0
    return modeNum
  } else {
    modeNum += 1
    return modeNum
  }
}