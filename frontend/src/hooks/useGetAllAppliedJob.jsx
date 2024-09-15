import { APPLY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`${APPLY_API_END_POINT}/get`);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAppliedJobs();
    })
}

export default useGetAppliedJobs;