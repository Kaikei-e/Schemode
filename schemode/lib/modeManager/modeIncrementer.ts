export default function incrementMode(modeNum: number) {
  console.log(modeNum);
  
  if (modeNum >= 3) {
    modeNum = 1
    return modeNum
  } else {
    modeNum += 1
    return modeNum
  }
}