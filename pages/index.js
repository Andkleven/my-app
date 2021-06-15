import { useState } from "react";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
export default function Home() {
  const [state, setState] = useState("");
  const { data } = useSWR(`/api`, (url) =>
    fetch(url).then((res) => res.json())
  );
  console.log(data);
  return (
    <div className={styles.container}>
      <form
        onSubmit={async () => {
          const res = await fetch("/api", {
            body: JSON.stringify({
              state,
            }),
            method: "POST",
          });
          const response = await res.json();
          console.log(response);
          mutate(`/api`);
        }}
      >
        <input onChange={(e) => setState(e.target.value)} value={state} />
        <button type="submit">Lagre</button>
      </form>
    </div>
  );
}
