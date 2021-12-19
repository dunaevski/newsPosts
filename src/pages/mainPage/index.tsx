import React from 'react';
import {useFetch} from "../../hooks/useFetch";
import {Alert, Pagination} from "@mui/material";
import {Loader} from "../../components/loader";
import NewsCard from "../../components/newsCard";
import styles from './styles.module.scss'
import {usePagination} from "../../hooks/usePagination";
import FilteringDate from "../../components/filteringDate";
import {Article, NewsResponse} from "../../types/apiResponse";
import {isMobile} from "react-device-detect";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

function MainPage() {
    const {countNews} = useSelector((state: RootState) => state.settings)
    const {filterDate} = useSelector((state: RootState) => state.filter)

    const {loading, response, error} = useFetch<NewsResponse>('/everything', {
        q: 'apple',
        pageSize: 100,
        from: filterDate[0],
        to: filterDate[1]
    })
    const {
        maxPage,
        currentPage,
        jump,
        currentData
    } = usePagination<Article>(response?.articles, countNews);

    if (loading) return (<Loader />)

    if (error) return <Alert severity="error">{error.message}</Alert>;

    const articles = currentData();
    if (!articles || !articles.length) return <Alert severity="info">No interesting news</Alert>;

    return (
        <div>
            <div className={`${styles.Filtering} ${isMobile && styles.MobileFiltering}`}>
                <Pagination count={maxPage}
                            page={currentPage}
                            variant="outlined"
                            onChange={(evt, page) => jump(page)} />
                <FilteringDate />
            </div>
            <div className={styles.Container}>
                {articles.map(article => {
                    return (
                        <NewsCard
                            key={article.title}
                            title={article.title}
                            description={article.description}
                            cover={article.urlToImage}
                            publishedAt={article.publishedAt}
                            tags={article.source}
                            url={article.url}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MainPage;
