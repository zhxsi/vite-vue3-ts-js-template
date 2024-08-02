import service from "@/utils/service";
export function getIp(data) {
    return service({
        url: `/artist/top/song`,
        method: "POST",
        params: {
            id: data,
        },
    })
}