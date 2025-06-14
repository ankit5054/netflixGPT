export default function videoFilter(
  listOfVideos: Object[],
  site: string,
  type: string[]
): Object[] {
  return listOfVideos.filter(
    (i: any) => i.site == site && type.includes(i.type)
  );
}
