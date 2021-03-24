import Head from "next/head";
import Layout from "../components/layout";
import { ResponsiveBar } from "@nivo/bar";
import pointsData from "../public/pointsData";

export default function Tech() {
  return (
    <Layout home>
      <Head>
        <title>Technology</title>
      </Head>
      <section className="about content">
        <h2>Technology</h2>
        <p>
          Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT
          Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students,
          under the guidance and active participation of the faculty and staff members. "Yogah Karmasu Kausalam" The
          moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means "Perfection in action
          is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing their
          extra-curricular talents.
        </p>
        <div className="chart">
          <h2> Points Tally GC 18-19</h2>
          <ResponsiveBar
            data={pointsData.data}
            keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "fries",
                },
                id: "dots",
              },
              {
                match: {
                  id: "sandwich",
                },
                id: "lines",
              },
            ]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "country",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "food",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </section>
    </Layout>
  );
}
