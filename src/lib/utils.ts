export const classNamesConcat = (...classes: any) => {
  return classes.filter(Boolean).join(' ');
};

export function secondsToHms(seconds: number) {

  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 3600 % 60);

  const hDisplay =  h + (h <= 1 ? " hour, " : " hours, ");
  const mDisplay =  m + (m <= 1 ? " minute, " : " minutes, ") ;
  const sDisplay =  s + (s <= 1 ? " second" : " seconds");
  return hDisplay + mDisplay + sDisplay; 
}