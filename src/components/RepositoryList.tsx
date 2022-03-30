import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

//https://api.github.com/users/LooseBleb
interface Repository{
    id : number;
    description : string;
    name : string;
    html_url : string;
}

export function RepositoryList()
{
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/LooseBleb/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))

    }, [])

    return(
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                {repositories.map(repository => (
                    <RepositoryItem key={repository.id} repository={repository}/> 
                ))}
            </ul>
        </section>
    )
}