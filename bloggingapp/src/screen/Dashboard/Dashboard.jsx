import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

const Dashboard = () => {
    const title = useRef();
    const blog = useRef();
    const [arr, setArr] = useState([]);

    const BlogPost = (e) => {
        e.preventDefault();
        arr.push({ title: title.current.value, des: blog.current.value });
        setArr([...arr]);
        console.log(arr)

    }

   const DeletePost = async(index) => {
       console.log(index); 

       Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            arr.splice(index,1);
            setArr([...arr]);
            console.log(arr);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
   }


    const EditPost = async(index)=>{
       console.log(index);  
       
}
    return (
        <>
            <form onSubmit={BlogPost} className='flex flex-col justify-center items-center gap-5 mt-10'>

                <label className='w-full flex justify-center items-center gap-3 text-xl'> <b>Title</b>
                    <input type="text" placeholder="Title" className="input input-bordered input-md w-[50%] ml-16" ref={title} minLength={5} maxLength={50} />
                </label>

                <label className='w-full flex justify-center items-start gap-3 text-xl'> <b>Description</b>
                    <textarea placeholder="Blog" className="textarea textarea-bordered w-[50%] min-h-80" ref={blog} minLength={100} maxLength={300} ></textarea>
                </label>

                <button className="btn btn-neutral mr-96 px-8 text-lg">Post</button>

            </form>

            {arr.length > 0 ?arr.map((item, index) => {
                return (
                 <div key={index} className='flex flex-col items-center'> 
                    <div className="card container bg-base-100 shadow-xl w-[100%] mt-10">
                        <div className="card-body rounded-lg">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.des}</p>
                            <div className="card-actions justify-end">
                                <button onClick={()=>DeletePost(index)} className="bg-red-600 rounded-lg px-5 py-2 text-slate-200"><b>Delete</b></  button>

                                <button onClick={()=>EditPost(index)} className="bg-green-600 rounded-lg px-5 py-2 text-slate-200"><b>Edit</b></button>
                            </div>
                        </div>
                    </div>
                 </div>
                )
            })
            : <p className='flex flex-wrap justify-center mt-3="true"'><b>No Data Found</b></p>
           }
        </>
    )
}

export default Dashboard