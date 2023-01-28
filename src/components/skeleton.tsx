import React from "react"
import ContentLoader from "react-content-loader"
import * as Styled from '../styles/Home'

export default function ShimmerSkeleton() {

    return (
        <Styled.CardSkeletonLi>
            <ContentLoader
                speed={2}
                width={180}
                height={160}
                viewBox="0 0 200 160"
                backgroundColor="#eeeded"
                foregroundColor="#bec5cb">

                <rect x="64" y="18" rx="8" ry="8" width="86" height="62" />
                <rect x="29" y="8" rx="4" ry="4" width="3" height="143" />
                <rect x="32" y="8" rx="1" ry="1" width="149" height="3" />
                <rect x="180" y="9" rx="4" ry="4" width="3" height="143" />
                <rect x="50" y="89" rx="0" ry="0" width="80" height="14" />
                <rect x="140" y="88" rx="0" ry="0" width="27" height="14" />
                <rect x="41" y="109" rx="0" ry="0" width="127" height="6" />
                <rect x="41" y="120" rx="0" ry="0" width="127" height="6" />
                <rect x="30" y="137" rx="3" ry="3" width="151" height="16" />
            </ContentLoader>
        </Styled.CardSkeletonLi>
    )
}
