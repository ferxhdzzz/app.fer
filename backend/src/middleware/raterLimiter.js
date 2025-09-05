import rateLimit from "express-rate-limit"

const limiter = rateLimit ({
windowMs: 15 * 60 * 1000,
max: 1000,
message: {
    status: 429,
    error: "too many request"
}

})

export default limiter