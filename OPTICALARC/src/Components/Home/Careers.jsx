const Careers = () => {
    return (
        <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-20">Current Job openings</h1>
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Job ID</th>
                    <th className="py-2 px-4 border-b">Job Title</th>
                    <th className="py-2 px-4 border-b items-start">Job Category</th>
                    <th className="py-2 px-4 border-b">Locations</th>
                    <th className="py-2 px-4 border-b">Experience</th>
                    <th className="py-2 px-4 border-b"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">34</td>
                    <td className="py-2 px-4 border-b">Backend Developer</td>
                    <td className="py-2 px-4 border-b">Development</td>
                    <td className="py-2 px-4 border-b">Pune</td>
                    <td className="py-2 px-4 border-b">Minimum 3+ years</td>
                    <td className="py-2 px-4 border-b">
                        <a href="#" class="text-white  bg-blue-400  hover:bg-blue-500 px-4 py-2 rounded">Apply Now</a>
                    </td>
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">40</td>
                    <td className="py-2 px-4 border-b">HR Manager</td>
                    <td className="py-2 px-4 border-b">HR</td>
                    <td className="py-2 px-4 border-b">Pune</td>
                    <td className="py-2 px-4 border-b">Minimum 1 year</td>
                    <td className="py-2 px-4 border-b">
                        <a href="#" class="text-white  bg-blue-400  hover:bg-blue-500 px-4 py-2 rounded">Apply Now</a>
                    </td>
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">46</td>
                    <td className="py-2 px-4 border-b">Support Engineer</td>
                    <td className="py-2 px-4 border-b"></td>
                    <td className="py-2 px-4 border-b">Pune</td>
                    <td className="py-2 px-4 border-b">Minimum 10 years</td>
                    <td className="py-2 px-4 border-b">
                        <a href="#" class="text-white  bg-blue-400  hover:bg-blue-500 px-4 py-2 rounded">Apply Now</a>
                    </td>
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">47</td>
                    <td className="py-2 px-4 border-b">React Developer</td>
                    <td className="py-2 px-4 border-b">Development</td>
                    <td className="py-2 px-4 border-b">Pune</td>
                    <td className="py-2 px-4 border-b">Minimum 2 years</td>
                    <td className="py-2 px-4 border-b ">
                        <a href="#" class="text-white  bg-blue-400  hover:bg-blue-500 hover:bg-blue-500 px-4 py-2 rounded">Apply Now</a>
                    </td>
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">49</td>
                    <td className="py-2 px-4 border-b">Java Developer</td>
                    <td className="py-2 px-4 border-b">Development</td>
                    <td className="py-2 px-4 border-b">Pune</td>
                    <td className="py-2 px-4 border-b">Minimum 1 years</td>
                    <td className="py-2 px-4 border-b">
                        <a href="#" class="text-white  bg-blue-400  hover:bg-blue-500 px-4 py-2 rounded">Apply Now</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
export default Careers