import React, {useEffect, useLayoutEffect, useState} from 'react';
import BaseLayout from "../components/base/BaseLayout";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, selectPosts} from "../app/slices/postSlice";
import $ from "jquery";
import _ from "lodash";

const Posts = ({}) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchPosts(page))
    }, [page])

    const columns = [
        {
            title: '#',
            data: 'id'
        },
        {
            title: 'User',
            data: 'userId'
        },
        {
            title: 'Title',
            data: 'title'
        },
        {
            title: 'Body',
            data: 'body'
        },
    ];

    useEffect(() => {
        $("#posts").DataTable({
            data: posts,
            columns,
        });
        return () => {
            //
            $('.data-table-wrapper')
                .find('table')
                .DataTable()
                .destroy(true);
        };
    }, []);


    useLayoutEffect(() => {
        if (typeof window !== "undefined" && typeof window.document !== "undefined") {
            require("datatables.net-bs4/css/dataTables.bootstrap4.min.css");
            window.DataTable = require("datatables/media/js/jquery.dataTables.min");
            require("datatables.net-bs4/js/dataTables.bootstrap4.min");
        }
    }, []);

    useEffect(() => {
        const table = $('table.dataTable#posts').DataTable();
        table.clear();
        table.rows.add(posts);
        table.draw();
        return () => {
            // SHUT DOWN
        };
    }, [posts]);

    return (
        <BaseLayout title={"Posts"}>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="posts" width="100%" cellSpacing="0">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            {/*{*/}
                            {/*    !!posts && !!posts.length &&*/}
                            {/*    posts.map(({id, title, body, userId}, index) => (*/}
                            {/*        <tr key={index}>*/}
                            {/*            <td>{id}</td>*/}
                            {/*            <td>{userId}</td>*/}
                            {/*            <td>{title}</td>*/}
                            {/*            <td title={body}>{_.truncate(body, 100)}</td>*/}
                            {/*        </tr>*/}
                            {/*    ))*/}
                            {/*}*/}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Posts;
