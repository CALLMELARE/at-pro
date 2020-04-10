import React, { Component, useEffect, useState } from 'react';
import { G2, Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet, Util } from 'bizcharts';
import fetchApi from '../../api/callApi';

interface Props {
}

class Heatmap extends Component<any, any>{
    constructor(props: Props) {
        super(props);
        this.state = {
            commitData: null
        };
    }

    componentDidMount() {
        const apiPath = "https://alifd.alibabausercontent.com/materials/@bizcharts/heatmap-calendar-horizontal/0.2.9/mock.json";
        fetch(apiPath)
            .then(res => res.json())
            .then(res => {
                this.setState({ commitData: res })
            })
    }

    render() {
        const cols = {
            day: {
                type: "cat",
                values: [
                    "星期日",
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六"
                ]
            },
            week: {
                type: "cat"
            },
            commits: {
                sync: true
            }
        };
        return (
            <div id="calendar">
                {this.state.commitData ?
                    <Chart
                        height={window.innerHeight}
                        data={this.state.commitData}
                        scale={cols}
                        forceFit
                        padding={[window.innerHeight / 3, 20, window.innerHeight / 3, 80]}
                    >
                        <Tooltip title="date" />
                        <Axis
                            name="week"
                            position="top"
                            tickLine={null}
                            line={null}
                            label={{
                                offset: 12,
                                textStyle: {
                                    fontSize: 12,
                                    fill: "#666",
                                    textBaseline: "top"
                                },
                                formatter: val => {
                                    if (val === "2") {
                                        return "MAY";
                                    } else if (val === "6") {
                                        return "JUN";
                                    } else if (val === "10") {
                                        return "JUL";
                                    } else if (val === "15") {
                                        return "AUG";
                                    } else if (val === "19") {
                                        return "SEP";
                                    } else if (val === "24") {
                                        return "OCT";
                                    }

                                    return "";
                                }
                            }}
                        />
                        <Axis name="day" grid={null} />
                        <Geom
                            type="polygon"
                            position="week*day*date"
                            shape="boundary-polygon"
                            color={["commits", "#BAE7FF-#1890FF-#0050B3"]}
                        />
                        <Coord reflect="y" />
                    </Chart>
                    : null}
            </div>
        )
    }
}

export default Heatmap