import { useState } from "react";
import { ClipLoader } from "react-spinners";


export default function Loading() {
    const [loading, setLoading] = useState(true);
    return (
            <div className="h-screen bg-white flex justify-center items-center">
              <ClipLoader size={50} color={"#123abc"} loading={loading} />
            </div>
    );
}