import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchAnswers() {
            //database related works
            const db = getDatabase();
            const answerRef = ref(db, "answers/" + videoID + "/questions");
            const answerQuery = query(answerRef, orderByKey());

            try {
                setError(false);
                setLoading(true);

                // request firebase database
                const snapshot = await get(answerQuery);
                setLoading(false);

                console.log(snapshot.exists())
                if (snapshot.exists()) {
                    setAnswers((prevAnswers) => {
                        // console.log(prevAnswers)
                        return [...prevAnswers, ...Object.values(snapshot.val())];
                    });
                }
            } catch (err) {
                console.error(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchAnswers();
        // console.log(answers)
    }, [videoID]);
    return { loading, error, answers };
}