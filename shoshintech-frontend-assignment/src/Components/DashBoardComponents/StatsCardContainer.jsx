import StatisticsCard from "./StatisticsCard";

export default function StatsCardContainer() {
    return (
        <div className="statscontainer">
            <StatisticsCard  title="Total Employees" number="214" info1="120 Men" info2="96 Women" card="1" />
            <StatisticsCard card="2" title="Talent Request" number="16" info1="6 Men" info2="10 Women"/>
        </div>
    )
}