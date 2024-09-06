import Image from "next/image";
import Chart from "@/components/chart/Chart";
import Piechart from "@/components/chart/Piechart";
import Recruiters from "@/components/chart/Recruiters";

export default function Home() {
  return (<div>
    <Chart />
    <Piechart/>
    <Recruiters/>
  </div>);
}
