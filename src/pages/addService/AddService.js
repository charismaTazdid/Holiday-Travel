import React from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../shared/useTitle';

const AddService = () => {
    useTitle("Add Service")
    const addNewService = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const img = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;
        // console.log(title, img, price, description
        const newService = { title, img, price, description }
        fetch(`${process.env.REACT_APP_URL}/addservice`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Added New Service")
            })
    }
    return (
        <div className="hero bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  my-10">
                <form onSubmit={addNewService} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Title</span>
                        </label>
                        <input type="text" placeholder="Title" name='title' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Img URL</span>
                        </label>
                        <input type="text" placeholder="serice url" name='photo' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="number" name="price" placeholder='$' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className='border-2 p-2' name="description" placeholder='Write Description' required></textarea>
                    </div>
                    <div className="form-control mt-3">
                        <button className="mt-2 px-3 py-2 bg-slate-300 text-[#003a6c] hover:bg-[#0b3962] hover:text-white duration-500   font-semibold">Add Service</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;