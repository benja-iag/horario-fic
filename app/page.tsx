import { SearchList } from "./components/Search";
import { Course } from "./types/courses";
import { dayOfWeek, removeAccent } from "./utils/utils";

const getData = async (): Promise<Course[]> => {
  const res = await fetch("https://api-salas.docencia.io/").then((response) =>
    response.json()
  );
  const data = res.data.allSalasUdps.edges;
  const mapa: any = {};
  const sala: any = {};
  const cleanData = data
    .filter((item: any) => {
      //remove empty values
      return item?.node?.course?.length > 0;
    })
    .map((item: any) => {
      // add 'allValues' props, use to make the filter in the searchBox
      const val: any = item.node;
      if (val.course.includes("BASES DE DATOS") && val.section == "3") {
        console.log("val", val);
      }
      if (sala[val.place] == undefined) {
        sala[val.place] = 1;
      } else {
        sala[val.place] = sala[val.place] + 1;
      }
      // if (val.day == 5) {
      //   const key = `${val.course}; s.${val.section}`;
      //   if (mapa[key]) {
      //     mapa[key] = mapa[key] + `.${val.section}`;
      //   } else {
      //     mapa[key] = val.section;
      //   }
      // }

      return {
        ...val,
        course: removeAccent(val.course),
        teacher: removeAccent(val.teacher),
        allValues: removeAccent(`${val.course} ${val.teacher}`),
        day: dayOfWeek(val.day),
      };
    });
  console.log("las salas son", sala);
  return cleanData;
};
export default async function Home() {
  const data: Course[] = await getData();
  return <SearchList data={data} />;
}
