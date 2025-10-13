
const transition = {duration: 1, ease: [0.76, 0, 0.24, 1]}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const height: any = {
    initial: {
      height: 0
    },
    enter: {
      height: "auto",
      transition
    },
    exit: {
      height: 0,
      transition
    }
}