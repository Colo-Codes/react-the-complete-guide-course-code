export default function Log({ logEvents = [] }) {
  const playerEvents = logEvents.map((event) => {
    return (
      <li
        key={`${event.row}-${event.col}`}
      >{`Player ${event.player} played ${event.symbol} on ${event.row}-${event.col}`}</li>
    );
  });

  return <ol id="log">{playerEvents}</ol>;
}
