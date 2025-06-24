import { FC, ReactNode } from "react";

export const Table: FC<{ tableInner: { row: ReactNode[] }[] }> = ({
  tableInner,
}) => {
  return (
    <div className="table-wrapper" style={{ marginBottom: "1rem" }}>
      <table>
        <tbody>
          {tableInner.map((item, index) => {
            return (
              <tr key={index}>
                {item.row.map((item, index) =>
                  index === 0 ? (
                    <th key={index}>{item}</th>
                  ) : (
                    <td key={index}>{item}</td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
