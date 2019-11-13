import * as React from "react"
import { Frame, Page, transform } from "framer"

const pages = ["I", "Am", "John", "Ma"]

const style = {
    fontSize: 100,
    fontWeight: 800,
    color: "05f",
}
export function PageEffects() {
    return (
        <Page
            width={"100%"}
            height={"100%"}
            overflow={"visible"}
            gap={-1000} // gap between two cards
            effect={info => {
                const offset = info.normalizedOffset // turn from -100, 0, 100 to -1, o, 1 regardless size/total page amount

                const opacity = transform(offset, [-1, 0, 1], [0, 1, 0]) // transform(input, inputRange, outputRange), convert, return nomarlized offset --> tranform to any property

                const scale = transform(offset, [-1, 0, 1], [0.5, 1, 0.5]) // scale the card

                return {
                    opacity: opacity,
                    scale: scale,
                }
            }}
        >
            {pages.map((title, index) => {
                return (
                    <Frame
                        size={"100%"}
                        background={"fff"}
                        radius={30}
                        key={index}
                        style={style}
                    >
                        {title}
                    </Frame>
                )
            })}
        </Page>
    )
}
