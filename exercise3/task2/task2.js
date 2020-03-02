document.getElementById("myInput").value="";
let arr = [
    'Ashish Shah', 'Rashmin Chhatrala', 'Yash Dubey', 'Prakash Jain', 'Yashraj Singh', 'Viraj Sinha',
    'Rajesh Kumar', 'Mahesh Marwadi', 'Suresh Sahni', 'Amar Vilas', 'Virdas Singhania', 'Rajeshwari Bindra',
    'Birendra Bhalerao', 'Virendra Bhupati', 'Bhupendra Singh', 'Bhuvam Bam', 'Shri Raj', 'Prashant Kamle',
    'Kamlesh Tomar', 'Risabh Khare', 'Rishi Kohli', 'Kunwar Kharwanda', 'Kartik Koli', 'Komal Jain', 'Kartikey Pandey'
];

let id = document.getElementById("myInput");
id.addEventListener("keyup", search);
let container = document.getElementById("container");



function search() {
    let content = "";

    let input = document.getElementById("myInput");
    if(input.value.length > 1) {
        let filter = input.value.toLowerCase();
        container.innerHTML = "";
        for (i = 0; i < arr.length; i++) {
            a = arr[i];
            if (a.toLowerCase().indexOf(filter) > -1) {
                content += `<li>${a.slice(0,a.toLowerCase().indexOf(filter))}<mark>${a.substr(a.toLowerCase().indexOf(filter),filter.length)}</mark>${a.slice(a.toLowerCase().indexOf(filter)+filter.length)}</li>`;
            }
        }
        container.innerHTML = content;
    }
}
