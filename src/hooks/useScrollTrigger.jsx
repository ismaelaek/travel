import { useEffect, useState } from "react";

const useScrollTrigger = (ref) => {
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (ref.current) {
				const rect = ref.current.getBoundingClientRect();
				if (rect.top < window.innerHeight && rect.bottom >= 0) {
					setInView(true);
				} else {
					setInView(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); 

		return () => window.removeEventListener("scroll", handleScroll);
	}, [ref]);

	return inView;
};

export default useScrollTrigger;
