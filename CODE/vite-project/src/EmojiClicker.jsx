import { useState } from "react";
import { v4 as uuid } from "uuid"

const EmojiClicker = () => {

    const [mojis, setMoji] = useState([{ id: uuid(), moji: "A" }])
    const randomEmoji = () => {
        const choices = ["A", "B", "C", "D", "E"]
        return choices[Math.floor(Math.random() * choices.length)]
    }
    const addCharactar = () => setMoji((prev) => [...prev, { id: uuid(), moji: randomEmoji() }])
    //配列,オブフェクトは参照を見ているので⚠
    const deleteEmoji = (id) => {
        setMoji((prev) => {
            return prev.filter(e => e.id !== id)
        })
    }
    const toLowerCase = () => {
        setMoji((prev) => {
            return prev.map((n) => ({
                ...n,
                moji: n.moji.toLowerCase()
            }))
        });
    };

    const toHeart = () => {
        setMoji((prev) => {
            return prev.map((n) => ({
                ...n,
                moji: "❤"
            }))
        })
    }


    return (
        <div>
            {mojis.map((e) => (
                <span
                    key={e.id}
                    onClick={() => deleteEmoji(e.id)}
                    style={{ marginRight: "10px", cursor: "pointer" }}
                >
                    {e.moji}
                </span>
            ))}
            <div style={{ marginTop: "10px" }}>
                <button onClick={addCharactar}>文字を追加する</button>
                <button onClick={toLowerCase}>小文字に変える</button>
                <button onClick={toHeart}>すべてハートにする</button>
            </div>
        </div>
    );
};


export default EmojiClicker;