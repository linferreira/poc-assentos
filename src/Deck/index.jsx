function Row({ row }) {
  return (
    <div style={{ display: "flex", gap: "40px", marginBottom: "12px" }}>
      {row.groups.map((group, gi) => (
        <div key={gi} style={{ display: "flex", gap: "8px" }}>
          {group.map((seat) => (
            <div
              key={seat.id}
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #333",
                borderRadius: 4,
                backgroundColor: seat.available ? "lightgreen" : "lightcoral",
              }}
            >
              {seat.id}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Deck({ deck }) {
  return (
    <div>
      {deck.rows.map((row) => (
        <Row key={row.rowNumber} row={row} />
      ))}
    </div>
  );
}

export default Deck;
