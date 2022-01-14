import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr className="Log">
      <td>
        {log.mistakesWereMadeToday ? (
          <span>💥Yes</span>
        ) : (
          <span>🙅‍♂‍ No</span>
        )}
      </td>
      <td>
        <a href={`/logs/${index}`} rel="noreferrer">
          {log.captainName}
        </a>
      </td>
      <td>
        <a href={`/logs/${index}`} rel="noreferrer">
            {log.title}
        </a>
      </td>
    </tr>
  );
}

export default Log;
