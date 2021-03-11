import { SyntheticEvent } from 'react';

function ActiveLink({ children, href }: { children: React.ReactNode, href: string }) {

	const style = {
		marginRight: 10,
		fontSize: '1rem',
		cursor: 'pointer',
	}

	const handleClick = (e: SyntheticEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
	}

	return (
		<a href={href} onClick={handleClick} style={style}>
			{children}
		</a>
	)
}

export default ActiveLink;