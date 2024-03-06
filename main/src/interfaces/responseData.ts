interface responseData{
    success: boolean;
    data: {
        user_id: number,
        username: string,
        email: string,
        password: string,
        created_at: string
    }[]
}

export default responseData;