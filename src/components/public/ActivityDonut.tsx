import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    Guide,
    G2
} from "bizcharts";
import DataSet from "@antv/data-set";

interface Props {
    data: { item: string; count: number; }[]
    style?: React.CSSProperties | undefined,
    title?: string,
    calc?: string,
}

interface State {

}

const { Global } = G2; // 获取 Global 全局对象
Global.animate = true; // 关闭默认动画
Global.colors = ['red', 'blue', 'yellow']; // 更改默认的颜色

const { DataView } = DataSet;
const { Html } = Guide;

const cols = {
    percent: {
        formatter: (val: any) => {
            val = val * 100 + "%";
            return val;
        }
    }
};

class Donut extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const dv = new DataView();
        let data = this.props.data
        dv.source(data).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        return (
            <div style={this.props.style}>
                <Chart
                    height={250}
                    data={dv}
                    scale={cols}
                    padding={[10, 10, 10, 10]}
                    forceFit
                >
                    <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
                    <Axis name="percent" />
                    <Legend
                        position="bottom"
                    />
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Guide>
                        <Html
                            position={["50%", "50%"]}
                            html={`<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;><span style=&quot;color:#262626;font-size:2.5em&quot;>${this.props.calc}</span></div>`}
                            alignX="middle"
                            alignY="middle"
                        />
                    </Guide>
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color="item"
                        tooltip={[
                            "item*percent",
                            (item, percent) => {
                                percent = percent * 100 + "%";
                                return {
                                    name: item,
                                    value: percent
                                };
                            }
                        ]}
                        style={{
                            lineWidth: 1,
                            stroke: "#fff"
                        }}
                    >
                        <Label
                            content="percent"
                            formatter={(val, item) => {
                                return item.point.item;
                            }}
                        />
                    </Geom>
                    <span className='donut-title'>{this.props.title}</span>
                </Chart>
            </div>
        );
    }
}

export default Donut