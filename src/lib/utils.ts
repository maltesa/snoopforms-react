export const classNamesConcat = (...classes: any) => {
  return classes.filter(Boolean).join(' ');
};

export function secondsToHms(duration: number) {
  const [H, M, S] = [3600, 60, 1].map(factor => {
    let r = Math.floor(duration / factor);
    duration = duration % factor;
    return r;
  });

  const h = H? H + ':': '';
  const m = M||H? M.toString().padStart(2, '0') + ':': '';
  const s = S.toString().padStart(2, '0')+(M||H? '':'s');
  return h + m + s;
}