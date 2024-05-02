import React from "react";

export default () => {
    return (
        <div className="container mx-auto my-5">
            <form action={`${import.meta.env.VITE_BASE_URL}/xtraDetails`} method="post" encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                    <input name="address" type="text" className="form-input" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Pincode</label>
                    <input name="pincode" type="number" className="form-input" id="exampleInputPassword1" min="100000" max="999999" required />
                </div>
                <div>
                    <label htmlFor="Image" className="form-label">Upload Image</label>
                    <input type="file" className="form-input" id="Image" name="ProfileImage" />
                </div>
                <button type="submit" className="btn bg-blue-500 text-white px-4 py-2 rounded mt-4">Submit</button>
            </form>
        </div>
    )
}
