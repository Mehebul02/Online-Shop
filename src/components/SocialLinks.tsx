import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
    const linksData=[
        {icon:<FaGithub/>, href:'https://github.com/Mehebul02'},
        {icon:<FaFacebook/>, href:'https://www.facebook.com/alif.islam.212'},
        {icon:<FaLinkedin/>, href:'https://www.facebook.com/alif.islam.212'}
    ]
    return (
        <div className="text-xl text-white/50 flex items-center gap-5 pt-5">
            {linksData?.map((item,index)=>(
                <Link key={index} href={item.href} target="_blank">{item.icon}  </Link>
            ))}
        </div>
    );
};

export default SocialLinks;