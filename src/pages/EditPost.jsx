import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config.js";
import  Container  from "../components/Container.jsx";
import Postform from "../components/Postform.jsx"



function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <Postform post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost