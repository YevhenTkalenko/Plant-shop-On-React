import './HeaderLang.scss'

interface Props {}

const HeaderLang = (props: Props) => {
    const lang: string[] = ['English', 'Ukrainian', 'French', 'Spanish']

    return (
        <div className="header-lang">
            <select>
                {lang.map((item, ind) => {
                    return <option key={ind}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default HeaderLang
